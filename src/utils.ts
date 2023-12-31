export function parsePs(item?: any) {
  if (item == null) {
    return {};
  }

  const details = item;

  const [category, title, ...body] = details?.body?.contents?.trim?.().split?.('\n') ?? [];
  const timestamp = details?.body?.updatedAt ?? details?.body?.createdAt;
  const date = new Date(timestamp);

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