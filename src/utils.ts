export function parsePs(item?: any) {
  if (item == null) {
    return {};
  }

  const details = item;

  const [category, title, ...body] = details?.body?.contents?.trim?.().split?.('\n') ?? [];
  const timestamp = details?.body?.updatedAt ?? details?.body?.createdAt;
  const koreanGMT = 9 * 3600_000;
  const date = new Date(timestamp + koreanGMT).toLocaleString('ko-KR', { timeZone: 'UTC' });

  return {
    id: details.id,
    category,
    title,
    body: body?.join('\n')?.trim?.(),
    createdAt: details?.body?.createdAt,
    timestamp,
    date
  } as const;
}