// components/auth/SignInForm.tsx
'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function SignInForm() {
  const t = useTranslations('contact');
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await signIn('credentials', {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res?.ok) {
      router.push('/admin'); // Redirect to dashboard or admin
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Card className='max-w-md mx-auto mt-10'>
      <CardContent className='p-6'>
        <form onSubmit={handleSubmit} className='space-y-4'>
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
            {t('signIn')}
          </Button>
          <Button
            variant='outline'
            className='w-full'
            onClick={() => signIn('google')}
            type='button'
          >
            {t('signInWithGoogle')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
