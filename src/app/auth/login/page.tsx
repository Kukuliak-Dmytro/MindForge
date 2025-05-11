'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PrimaryButton } from '@/components/ui/button';
import { InputText } from '@/components/ui/input-text';
import { login } from '../actions';
export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await login(formData);
      if (result?.error) {
        setError(result.error);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Увійти до облікового запису
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Або{' '}
            <Link href="/auth/register" className="font-medium text-primary hover:text-primary-dark">
              створити новий обліковий запис
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
            <InputText
              id="email"
              name="email"
              title="Електронна пошта"
              placeholder="Введіть вашу електронну пошту"
              type="email"
              autoComplete="email"
              required
            />

            <InputText
              id="password"
              name="password"
              title="Пароль"
              placeholder="Введіть ваш пароль"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Запам'ятати мене
              </label>
            </div>

            <div className="text-sm">
              <Link href="/auth/forgot-password" className="font-medium text-primary hover:text-primary-dark">
                Забули пароль?
              </Link>
            </div>
          </div>

          <div>
            <PrimaryButton type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Завантаження...' : 'Увійти'}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
} 