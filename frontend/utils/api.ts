const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAllFeedbacks = async () => {
  const res = await fetch(`${URL}/api/feedbacks`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export const getFeedback  = async (id: number) => {
  const res = await fetch(`${URL}/api/feedbacks/${id}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export const getAllNotifications = async () => {
  const res = await fetch(`${URL}/api/notifications`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export const checkNewNotification = async () => {
  const res = await fetch(`${URL}/api/notifications/check`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export const updateNotification = async ({id, data}: {id:number,data:any}) => {
  const res = await fetch(`${URL}/api/notifications/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isRead: data,
    }),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export const addComment = async ({id, data}: {id:number,data:any}) => {
  const res = await fetch(`${URL}/api/feedbacks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment: data,
    }),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}