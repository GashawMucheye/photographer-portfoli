// components/auth/SignUpForm.tsx
'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function SignUpForm() {
  const t = useTranslations('contact');
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push('/auth/signin');
    } else {
      const data = await res.json();
      setError(data.error || t('error'));
    }
  };

  return (
    <Card className='max-w-md mx-auto mt-10'>
      <CardContent className='p-6'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input
            type='text'
            placeholder={t('name')}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            type='email'
            placeholder={t('email')}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <Input
            type='password'
            placeholder={t('password')}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <Button type='submit' className='w-full'>
            {t('submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
