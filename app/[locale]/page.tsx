import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href='/about'>{t('about')}</Link>
      <Button variant='default' className='mt-4 bg-red-800'>
        {t('contact')}
      </Button>
    </div>
  );
}
