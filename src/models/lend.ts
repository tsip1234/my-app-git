import Tool from "./tool";
import User from "./user";

export default interface Lend {
  id: number;
  lendingDate: Date;
  returnDate: Date | null;
  user: User;
  tool: Tool;
}



