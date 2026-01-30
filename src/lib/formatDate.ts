export const formatDateTime = (dateString: Date) => {
  if (!dateString) {
    return {
      dateTime: 'Invalid Date',
      dateOnly: 'Invalid Date',
      timeOnly: 'Invalid Date',
    };
  }

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const formattedDateTime: string = new Date(dateString).toLocaleString(
    'en-US',
    dateTimeOptions,
  );
  const formattedDate: string = new Date(dateString).toLocaleString(
    'en-US',
    dateOptions,
  );
  const formattedTime: string = new Date(dateString).toLocaleString(
    'en-US',
    timeOptions,
  );
  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};
