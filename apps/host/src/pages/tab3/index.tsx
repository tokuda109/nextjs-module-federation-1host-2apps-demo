import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Tabs } from '~/components/Tabs';

const Tab3 = dynamic(() => import('app2/Tab3'), {
  ssr: false,
});

export default function Tab3Page() {
  const router = useRouter();

  const onTab = (index: number) => {
    router.push(`/tab${index}`);
  };

  return (
    <main>
      <Tabs onClick={onTab} />

      <Tab3 />
    </main>
  );
}
