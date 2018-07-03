const servicesUrl = '';

const mkServiceUrl = (path) => `${servicesUrl}/${path}`;

export const apiUrls = {
  login: mkServiceUrl('user/loginUser')
};
