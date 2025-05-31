import { useState } from 'react'
import { useTutorEducation } from '@/hooks/use-tutor-profile'
import { InputText } from '@/components/ui/input-text'
import { InputDate } from '@/components/ui/input-date'
import { Separator } from '@/components/ui/separator'
import type { TutorEducation } from '@/types/tutor-types'
import { useFormState } from '@/lib/hooks/use-form-state'
import { PrimaryButton, SecondaryButton, DangerButton } from '@/components/ui/button'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

interface EducationSectionProps {
  education: TutorEducation[]
}

export function EducationSection({ education }: EducationSectionProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null);
  const { addEducation, removeEducation, updateEducation, isUpdating, error } = useTutorEducation()

  const initialFormState = {
    institution: '',
    fieldOfStudy: '',
    degree: '',
    startDate: '',
    endDate: ''
  }

  const { formState, handleChange, resetForm, setFormState } = useFormState(initialFormState)

  const handleAdd = async () => {
    try {
      await addEducation({
        institution: formState.institution,
        fieldOfStudy: formState.fieldOfStudy,
        degree: formState.degree,
        startDate: new Date(formState.startDate).toISOString(),
        endDate: formState.endDate ? new Date(formState.endDate).toISOString() : null
      })
      resetForm()
      setIsAdding(false)
    } catch (error) {
      console.error('Failed to add education:', error)
    }
  }

  const handleRemove = async (id: string) => {
    try {
      await removeEducation(id)
    } catch (error) {
      console.error('Failed to remove education:', error)
    }
  }

  const handleEdit = (entry: TutorEducation) => {
    setEditingId(entry.id);
    setFormState({
      institution: entry.institution,
      fieldOfStudy: entry.fieldOfStudy,
      degree: entry.degree,
      startDate: entry.startDate ? entry.startDate.slice(0, 10) : '',
      endDate: entry.endDate ? entry.endDate.slice(0, 10) : ''
    });
  };

  const handleUpdate = async (id: string) => {
    try {
      await updateEducation(id, {
        institution: formState.institution,
        fieldOfStudy: formState.fieldOfStudy,
        degree: formState.degree,
        startDate: new Date(formState.startDate).toISOString(),
        endDate: formState.endDate ? new Date(formState.endDate).toISOString() : null
      });
      setEditingId(null);
      resetForm();
    } catch (error) {
      console.error('Failed to update education:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    resetForm();
  };

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-neutral-700">Освіта</h2>
        <div className="flex gap-2">
          <button
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
            onClick={() => setIsAdding(true)}
            aria-label="Додати освіту"
            type="button"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {education.map((entry) => (
          <div key={entry.id} className="flex flex-col gap-2 p-6 bg-neutral-50 shadow-lg rounded-2xl border border-neutral-200 transition hover:shadow-xl">
            {editingId === entry.id ? (
              <>
                <InputText
                  value={formState.institution}
                  id="institution"
                  title="Навчальний заклад"
                  placeholder="Назва навчального закладу"
                  onChange={handleChange}
                  className="w-full"
                />
                <InputText
                  value={formState.fieldOfStudy}
                  id="fieldOfStudy"
                  title="Спеціальність"
                  placeholder="Ваша спеціальність"
                  onChange={handleChange}
                  className="w-full"
                />
                <InputText
                  value={formState.degree}
                  id="degree"
                  title="Ступінь"
                  placeholder="Ваш ступінь"
                  onChange={handleChange}
                  className="w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputDate
                    value={formState.startDate}
                    id="startDate"
                    title="Дата початку"
                    placeholder="Виберіть дату"
                    onChange={handleChange}
                    className="w-full"
                  />
                  <InputDate
                    value={formState.endDate}
                    id="endDate"
                    title="Дата закінчення"
                    placeholder="Виберіть дату"
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <SecondaryButton onClick={handleCancelEdit}>Скасувати</SecondaryButton>
                  <PrimaryButton onClick={() => handleUpdate(entry.id)} disabled={isUpdating}>
                    {isUpdating ? 'Збереження...' : 'Зберегти'}
                  </PrimaryButton>
                </div>
              </>
            ) : (
              <div className="flex justify-between items-start w-full">
                <div>
                  <h3 className="text-base font-semibold text-neutral-800">{entry.institution}</h3>
                  <p className="text-neutral-600">{entry.fieldOfStudy}</p>
                  <p className="text-neutral-600">{entry.degree}</p>
                  <p className="text-sm text-neutral-500">
                    {new Date(entry.startDate).toLocaleDateString()} -
                    {entry.endDate ? new Date(entry.endDate).toLocaleDateString() : 'Present'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <SecondaryButton size="icon" onClick={() => handleEdit(entry)} aria-label="Редагувати">
                    <FiEdit2 size={18} />
                  </SecondaryButton>
                  <DangerButton size="icon" onClick={() => handleRemove(entry.id)} aria-label="Видалити">
                    <FiTrash2 size={18} />
                  </DangerButton>
                </div>
              </div>
            )}
          </div>
        ))}
        {isAdding && (
          <div className="flex flex-col gap-4 p-6 bg-neutral-50 shadow-lg rounded-2xl border border-neutral-200 transition hover:shadow-xl">
            <InputText
              value={formState.institution}
              id="institution"
              title="Навчальний заклад"
              placeholder="Назва навчального закладу"
              onChange={handleChange}
              className="w-full"
            />
            <InputText
              value={formState.fieldOfStudy}
              id="fieldOfStudy"
              title="Спеціальність"
              placeholder="Ваша спеціальність"
              onChange={handleChange}
              className="w-full"
            />
            <InputText
              value={formState.degree}
              id="degree"
              title="Ступінь"
              placeholder="Ваш ступінь"
              onChange={handleChange}
              className="w-full"
            />
            <div className="grid grid-cols-2 gap-4">
              <InputDate
                value={formState.startDate}
                id="startDate"
                title="Дата початку"
                placeholder="Виберіть дату"
                onChange={handleChange}
                className="w-full"
              />
              <InputDate
                value={formState.endDate}
                id="endDate"
                title="Дата закінчення"
                placeholder="Виберіть дату"
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="flex justify-end gap-2">
              <SecondaryButton onClick={() => {
                resetForm()
                setIsAdding(false)
              }}>
                Скасувати
              </SecondaryButton>
              <PrimaryButton 
                onClick={handleAdd}
                disabled={isUpdating}
              >
                {isUpdating ? 'Збереження...' : 'Додати'}
              </PrimaryButton>
            </div>
          </div>
        )}
        {error && (
          <div className="text-red-500 text-sm">
            {error.message}
            {error.errors?.map((err, index) => (
              <div key={index}>{err.message}</div>
            ))}
          </div>
        )}
      </div>
      <Separator />
    </>
  )
} 