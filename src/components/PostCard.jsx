import { motion } from "framer-motion";
import { X, Pencil } from "lucide-react";

const PostCard = ({ post, onDelete, onEdit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      layout
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-4 transition hover:scale-[1.01]"
    >
      <div className="flex gap-4 items-start">
        <img
          src={`https://i.pravatar.cc/150?u=${post.id}`}
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{post.body}</p>
        </div>
        <button
          onClick={() => onEdit(post)}
          className="text-blue-500 hover:text-blue-600"
        >
          <Pencil size={18} />
        </button>
        <button
          onClick={() => onDelete(post.id)}
          className="text-red-500 hover:text-red-600"
        >
          <X size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default PostCard;
