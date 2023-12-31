function formattedDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay() + 1;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
}

export function parsePs(item?: any) {
  if (item == null) {
    return {};
  }

  const details = item;

  const [category, title, ...body] = details?.body?.contents?.trim?.().split?.('\n') ?? [];
  const timestamp = details?.body?.updatedAt ?? details?.body?.createdAt;
  const date = formattedDate(new Date(timestamp));

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