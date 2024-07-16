import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Tabs } from '~/components/Tabs';

const Tab2 = dynamic(() => import('app1/Tab2'), {
  ssr: false,
});

export default function Tab2Page() {
  const router = useRouter();

  const onTab = (index: number) => {
    router.push(`/tab${index}`);
  };

  return (
    <main>
      <Tabs onClick={onTab} />

      <Tab2 />
    </main>
  );
}