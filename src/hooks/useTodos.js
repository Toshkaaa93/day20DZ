import { useState } from "react";

const usePosts = () => {
 
  const [viewModal, setViewModal] = useState(false)
   
  const openModal = () => {
    setViewModal(true)
  }
  const closeModal = () => {
    setViewModal(false)
  }

	return {
	  openModal,
    closeModal,
    viewModal,
  	}
};

export default usePosts
