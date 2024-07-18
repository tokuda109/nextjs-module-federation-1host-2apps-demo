import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Tabs } from '~/components/Tabs';

const Tab4 = dynamic(() => import('app2/Tab4'), {
  ssr: false,
});

export default function Tab4Page({ isAuthenticated }: { isAuthenticated: boolean }) {
  const router = useRouter();

  const onTab = (index: number) => {
    router.push(`/tab${index}`);
  };

  const onLink = (index: number) => {
    router.push(`/tab${index}`);
  };

  return (
    <main>
      <Tabs onClick={onTab} />

      <Tab4 isAuthenticated={isAuthenticated} onLink={onLink} />
    </main>
  );
}
