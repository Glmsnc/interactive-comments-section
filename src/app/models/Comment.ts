import { Reply } from "./Reply";
import { User } from "./User";

export interface CommentData {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replyingTo: string;
    replies: Reply[]
}
