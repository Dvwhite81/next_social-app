export const getTimeSince = (created_at: Date) => {
  const timeNow = new Date().getTime();
  const timeCreated = new Date(created_at).getTime();
  const minutesSince = Math.floor((timeNow - timeCreated) / 60000);

  if (minutesSince < 60) {
    return minutesSince > 1
      ? `${minutesSince} mins ago`
      : `${minutesSince} min ago`;
  }

  const hoursSince = Math.floor(minutesSince / 60);

  if (hoursSince < 24) {
    return hoursSince > 1
      ? `${hoursSince} hours ago`
      : `${hoursSince} hour ago`;
  }

  const daysSince = Math.floor(hoursSince / 24);

  return daysSince > 1 ? `${daysSince} days ago` : `${daysSince} day ago`;
};
