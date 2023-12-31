'use client';

import { Colors, ResponsivePage, Spacing } from '@divops-packages/blog-creco-dev';
import { usePss } from '../hooks/usePss';
import Link from 'next/link';

export const HomePage = ({ list: initialList }: { list: any }) => {
  const list = usePss(initialList);

  list.sort((psA, psB) => psA.createdAt > psB.createdAt ? -1 : 1);

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
        list.map((item: any) => {
          return (
            <li key={item.id} style={{ marginBottom: '48px' }}>
              <Link
                href={`/${item.id}`}
                className="clickable"
                style={{
                  fontSize: '1.6rem',
                  textDecoration: 'unset',
                }}
              >
                <span style={{ lineHeight: '100%', fontSize: '1.2rem' }}>{item.category}</span>
                <h3>{item.title}</h3>
                <Spacing size={4} />
                <span style={{ lineHeight: '100%', color: Colors.SoftGrey }}>{item.body.split('\n')[0]}</span>
              </Link>
            </li>
          );
        })
      }
      </ul>
    </ResponsivePage>
  )
};
