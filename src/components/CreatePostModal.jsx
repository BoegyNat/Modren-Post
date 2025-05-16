import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CreatePostModal = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    const newPost = {
      id: Date.now(), // mock id
      title,
      body,
    };
    onCreate(newPost);
    setTitle("");
    setBody("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-[90%] max-w-md"
            initial={{ scale: 0.9, y: -30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -30 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Create New Post
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
              />
              <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                >
                  Create
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreatePostModal;
