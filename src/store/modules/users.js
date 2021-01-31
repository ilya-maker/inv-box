// Utils
import { getUsers, postUser } from '../../utils/requests';

export default {
  state: {
    users: [],
    loaderList: true,
    loaderForm: false,
    errorForm: false,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoaderList(state, loaderList) {
      state.loaderList = loaderList;
    },
    setLoaderForm(state, loaderForm) {
      state.loaderForm = loaderForm;
    },
    setErrorFormForm(state, errorForm) {
      state.errorForm = errorForm;
    },
    removeUser(state, userId) {
      const filteredUser = state.users.filter((user) => user.id !== userId);
      state.users = filteredUser;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      commit('setLoaderList', true);
      try {
        const users = await getUsers();
        // Simulate download from server
        setTimeout(() => {
          commit('setUsers', users.reverse());
          commit('setLoaderList', false);
        }, 1000);
      } catch (error) {
        console.error(`Happened error in fetchUsers: ${error}`);
      }
    },
    async addUser({ commit }, newUser) {
      commit('setLoaderForm', true);
      try {
        const status = await postUser(newUser);
        // Simulate post to server
        setTimeout(() => {
          if (status === 201) {
            commit('setLoaderForm', false);
            commit('setErrorFormForm', false);
          }
        }, 1000);
      } catch (error) {
        commit('setErrorFormForm', true);
        commit('setLoaderForm', false);
        console.error(`Happened error in addUser: ${error}`);
      }
    },
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    getLoaderList(state) {
      return state.loaderList;
    },
    getLoaderForm(state) {
      return state.loaderForm;
    },
    getErrorForm(state) {
      return state.errorForm;
    },
  },
};
