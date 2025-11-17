export const getHabits = async () => {
  const res = await fetch(
    "https://assignment-10-fullstack-backend-production.up.railway.app/habits"
  );
  const data = await res.json();
  return data;
};

export const markHabitsComplete = async (id, token) => {
  const res = await fetch(
    `https://assignment-10-fullstack-backend-production.up.railway.app/habits/mark/${id}`,
    {
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const markcheckHabits = async (id, token) => {
  const res = await fetch(
    `https://assignment-10-fullstack-backend-production.up.railway.app/habits/missed/${id}`,
    {
      method: "PATCH",
      headers: { authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  return data;
};

export const createHabits = async (data, token) => {
  const res = await fetch(
    "https://assignment-10-fullstack-backend-production.up.railway.app/habits",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const result = await res.json();
  return result;
};

export const updateHabits = async (id, data, token) => {
  const res = await fetch(
    `https://assignment-10-fullstack-backend-production.up.railway.app/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const result = await res.json();
  return result;
};

export const deleteHabits = async (id, token) => {
  const res = await fetch(
    `https://assignment-10-fullstack-backend-production.up.railway.app/habits/delete/${id}`,
    {
      method: "DELETE",
      headers: { authorization: `Bearer ${token}` },
    }
  );
  const data = res.json();
  return data;
};

export const getHabitsById = async (id, token) => {
  const res = await fetch(
    `https://assignment-10-fullstack-backend-production.up.railway.app/${id}`,
    {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
    }
  );
  const data = res.json();
  return data;
};

export const getMyHabits = async (email, token) => {
  const res = await fetch(
    `https://assignment-10-fullstack-backend-production.up.railway.app/my-habits?email=${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );
  const data = res.json();
  return data;
};

export const latestHabits = async () => {
  const res = await fetch(
    "https://assignment-10-fullstack-backend-production.up.railway.app/recent"
  );
  const data = await res.json();
  return data;
};
