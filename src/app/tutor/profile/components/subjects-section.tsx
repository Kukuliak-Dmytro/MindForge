import { useState } from 'react'
import { useTutorSubjects } from '@/hooks/use-tutor-profile'
import { Section } from '@/components/layout/section'
import { PrimaryButton, SecondaryButton, DangerButton } from '@/components/ui/button'
import { InputText } from '@/components/ui/input-text'
import { Separator } from '@/components/ui/separator'
import type { TutorSubject } from '@/types/tutor-types'
import { useFormState } from '@/lib/hooks/use-form-state'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

interface SubjectsSectionProps {
  subjects: TutorSubject[]
  availableSubjects: Array<{ id: string; name: string }>
  availableCategories: Array<{ id: string; name: string; isRecurring: boolean }>
}

export function SubjectsSection({ subjects, availableSubjects, availableCategories }: SubjectsSectionProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const { addSubject, removeSubject, updateSubject, isUpdating, error } = useTutorSubjects()

  const initialFormState = {
    subjectId: '',
    categoryId: '',
    price: ''
  }

  const { formState, handleChange, resetForm, updateField, setFormState } = useFormState(initialFormState)

  const handleAdd = async () => {
    try {
      await addSubject({
        subjectId: formState.subjectId,
        categoryId: formState.categoryId,
        price: parseFloat(formState.price)
      })
      resetForm()
      setIsAdding(false)
    } catch (error) {
      console.error('Failed to add subject:', error)
    }
  }

  const handleRemove = async (subjectId: string, categoryId: string) => {
    try {
      await removeSubject(subjectId, categoryId)
    } catch (error) {
      console.error('Failed to remove subject:', error)
    }
  }

  const handleEdit = (entry: TutorSubject) => {
    setEditingId(entry.subjectId);
    setEditingCategoryId(entry.categoryId);
    setFormState({
      subjectId: entry.subjectId,
      categoryId: entry.categoryId,
      price: entry.price.toString()
    });
  };

  const handleUpdate = async (oldSubjectId: string, oldCategoryId: string) => {
    try {
      await updateSubject(
        oldSubjectId,
        oldCategoryId,
        {
          subjectId: formState.subjectId,
          categoryId: formState.categoryId,
          price: parseFloat(formState.price)
        }
      );
      setEditingId(null);
      setEditingCategoryId(null);
      resetForm();
    } catch (error) {
      console.error('Failed to update subject:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingCategoryId(null);
    resetForm();
  };

  const getSubjectName = (subjectId: string) => {
    return availableSubjects.find(s => s.id === subjectId)?.name || 'Unknown Subject'
  }

  const getCategoryName = (categoryId: string) => {
    return availableCategories.find(c => c.id === categoryId)?.name || 'Unknown Category'
  }

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-neutral-700">Предмети та ціни</h2>
        <div className="flex gap-2">
          <button
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
            onClick={() => setIsAdding(true)}
            aria-label="Додати предмет"
            type="button"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {subjects.map((entry) => (
          <div key={entry.id} className="flex flex-col gap-2 p-6 bg-neutral-50 shadow-lg rounded-2xl border border-neutral-200 transition hover:shadow-xl">
            {editingId === entry.subjectId && editingCategoryId === entry.categoryId ? (
              <>
                <div>
                  <label className="pl-4 block mb-1">Предмет</label>
                  <Select
                    value={formState.subjectId}
                    onValueChange={(value) => updateField('subjectId', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Виберіть предмет" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableSubjects.map((subject) => (
                        <SelectItem key={subject.id} value={subject.id}>
                          {subject.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="pl-4 block mb-1">Категорія</label>
                  <Select
                    value={formState.categoryId}
                    onValueChange={(value) => updateField('categoryId', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Виберіть категорію" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <InputText
                  value={formState.price}
                  id="price"
                  title="Ціна за годину"
                  placeholder="Введіть ціну"
                  type="text"
                  onChange={handleChange}
                  className="w-full"
                />
                <div className="flex justify-end gap-2">
                  <SecondaryButton onClick={handleCancelEdit}>Скасувати</SecondaryButton>
                  <PrimaryButton onClick={() => handleUpdate(entry.subjectId, entry.categoryId)} disabled={isUpdating}>
                    {isUpdating ? 'Збереження...' : 'Зберегти'}
                  </PrimaryButton>
                </div>
              </>
            ) : (
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-semibold text-neutral-800">{getSubjectName(entry.subjectId)}</h3>
                  <p className="text-neutral-600">{getCategoryName(entry.categoryId)}</p>
                  <p className="text-sm text-neutral-500">
                    {entry.price.toLocaleString('uk-UA', { style: 'currency', currency: 'UAH' })} / година
                  </p>
                </div>
                <div className="flex gap-2">
                  <SecondaryButton size="icon" onClick={() => handleEdit(entry)} aria-label="Редагувати">
                    <FiEdit2 size={18} />
                  </SecondaryButton>
                  <DangerButton size="icon" onClick={() => handleRemove(entry.subjectId, entry.categoryId)} aria-label="Видалити">
                    <FiTrash2 size={18} />
                  </DangerButton>
                </div>
              </div>
            )}
          </div>
        ))}
        {isAdding && (
          <div className="flex flex-col gap-4 p-6 bg-neutral-50 shadow-lg rounded-2xl border border-neutral-200 transition hover:shadow-xl">
            <div>
              <label className="pl-4 block mb-1">Предмет</label>
              <Select
                value={formState.subjectId}
                onValueChange={(value) => updateField('subjectId', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Виберіть предмет" />
                </SelectTrigger>
                <SelectContent>
                  {availableSubjects.map((subject) => (
                    <SelectItem key={subject.id} value={subject.id}>
                      {subject.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="pl-4 block mb-1">Категорія</label>
              <Select
                value={formState.categoryId}
                onValueChange={(value) => updateField('categoryId', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Виберіть категорію" />
                </SelectTrigger>
                <SelectContent>
                  {availableCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <InputText
              value={formState.price}
              id="price"
              title="Ціна за годину"
              placeholder="Введіть ціну"
              type="text"
              onChange={handleChange}
              className="w-full"
            />
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