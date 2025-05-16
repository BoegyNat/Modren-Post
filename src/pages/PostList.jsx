import { useEffect, useState } from "react";
import {
  getPosts,
  deletePost,
  createPost,
  updatePost,
} from "../services/postService";
import PostCard from "../components/PostCard";
import CreatePostModal from "../components/CreatePostModal";
import EditPostModal from "../components/EditPostModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import { AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [deletePostId, setDeletePostId] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await getPosts();
      setPosts(res.data.slice(0, 10)); // จำกัด 10 โพสต์
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreate = async (newPost) => {
    try {
      await createPost(newPost);
      setPosts((prev) => [newPost, ...prev]);
      toast.success("Post created successfully!");
    } catch (err) {
      toast.error("Failed to create post");
    }
  };

  const handleUpdate = async (updatedPost) => {
    try {
      await updatePost(updatedPost.id, updatedPost);
      setPosts((prev) =>
        prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
      );
      toast.success("Post updated!");
    } catch (err) {
      toast.error("Failed to update post");
    }
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    deletePost(id);
    toast.success("Post deleted");
  };

  if (loading)
    return (
      <div className="flex item-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center mb-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
        >
          <Plus className="mr-2" /> <span>New Post</span>
        </button>
      </div>

      <AnimatePresence>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={(id) => setDeletePostId(id)}
            onEdit={(post) => setEditPost(post)}
          />
        ))}
      </AnimatePresence>

      <EditPostModal
        isOpen={!!editPost}
        post={editPost}
        onClose={() => setEditPost(null)}
        onUpdate={handleUpdate}
      />
      <CreatePostModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCreate={handleCreate}
      />
      <DeleteConfirmModal
        isOpen={!!deletePostId}
        onClose={() => setDeletePostId(null)}
        onConfirm={() => handleDelete(deletePostId)}
      />
    </div>
  );
};

export default PostList;
