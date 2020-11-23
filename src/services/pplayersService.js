import execute from "./execute";

const playersService = {
  async getPlayers() {
    return execute("players");
  },
  async getPlayerById(id) {
    return execute(`players/${id}`);
  },
  async getProfile() {
    return execute("players/me");
  },
};

export default playersService;
