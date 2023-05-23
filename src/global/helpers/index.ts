export const unmaskPhone = (phone: string) => {
  return phone.replaceAll(/[+()\s-]/gim, '');
};
