'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PrimaryButton } from '@/components/ui/button';
import { InputText } from '@/components/ui/input-text';
import { signup } from '../actions';

type UserType = 'student' | 'mentor';

export default function RegisterPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>('student');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;

    console.log('Register form submitted:', { email, firstName, lastName, userType });

    if (password !== confirmPassword) {
      setError('Паролі не співпадають');
      setIsLoading(false);
      return;
    }

    formData.append('userType', userType);

    try {
      const result = await signup(formData);
      
      if (result?.error) {
        console.error('Signup returned error:', result.error);
        setError(result.error);
      }
    } catch (err) {
      console.error('Unexpected error in register page:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Створити обліковий запис
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Або{' '}
            <Link href="/auth/login" className="font-medium text-primary hover:text-primary-dark">
              увійти до існуючого облікового запису
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {/* User Type Selection */}
            <div className="flex gap-4">
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border ${
                  userType === 'student'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
                onClick={() => setUserType('student')}
              >
                Я студент
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border ${
                  userType === 'mentor'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
                onClick={() => setUserType('mentor')}
              >
                Я ментор
              </button>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <InputText
                id="firstName"
                name="firstName"
                title="Ім'я"
                placeholder="Введіть ваше ім'я"
                type="text"
                required
              />
              <InputText
                id="lastName"
                name="lastName"
                title="Прізвище"
                placeholder="Введіть ваше прізвище"
                type="text"
                required
              />
            </div>

            {/* Email Field */}
            <InputText
              id="email"
              name="email"
              title="Електронна пошта"
              placeholder="Введіть вашу електронну пошту"
              type="email"
              autoComplete="email"
              required
            />

            {/* Password Fields */}
            <InputText
              id="password"
              name="password"
              title="Пароль"
              placeholder="Введіть ваш пароль"
              type="password"
              autoComplete="new-password"
              required
            />

            <InputText
              id="confirmPassword"
              name="confirmPassword"
              title="Підтвердження паролю"
              placeholder="Підтвердіть ваш пароль"
              type="password"
              autoComplete="new-password"
              required
            />
          </div>

          <div>
            <PrimaryButton type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Завантаження...' : 'Створити обліковий запис'}
            </PrimaryButton>
          </div>

          <div className="text-sm text-center text-gray-600">
            Створюючи обліковий запис, ви погоджуєтесь з нашими{' '}
            <Link href="/terms" className="font-medium text-primary hover:text-primary-dark">
              Умовами використання
            </Link>{' '}
            та{' '}
            <Link href="/privacy" className="font-medium text-primary hover:text-primary-dark">
              Політикою конфіденційності
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} 