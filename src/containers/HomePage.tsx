'use client';

import { useRouter } from 'next/navigation';
import { Colors, ResponsivePage, Spacing } from '@divops-packages/blog-creco-dev';
import { usePss } from '../hooks/usePss';

export const HomePage = ({ list: initialList }: { list: any }) => {
  const router = useRouter();
  const pss = usePss(initialList);

  pss.sort((psA, psB) => psA.createdAt > psB.createdAt ? -1 : 1);

  return (
    <ResponsivePage
      mainBackgroundColor={Colors.Dark}
      subBackgroundColor={Colors.DeepDark}
      fontColor={Colors.SoftWhite}
      desktopPageWidth="840px"
    >
      <Spacing size={12} />
      <h1>Creco's Problem Solving</h1>
      <Spacing size={60} />

      <ul>
      {
        pss.map((item: any) => {
          return (
            <li
              className="clickable"
              style={{
                fontSize: '1.6rem',
                margin: '0 0 48px',
                textDecoration: 'unset',
              }}
              key={item.id}
              onClick={() => {
                router.push(`/${item.id}`);
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.category}</span>
              <h3>{item.title}</h3>
              <Spacing size={4} />
              <span style={{ color: Colors.SoftGrey }}>{item.body.split('\n')[0]}</span>
            </li>
          );
        })
      }
      </ul>
    </ResponsivePage>
  )
};
