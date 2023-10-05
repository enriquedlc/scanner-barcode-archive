// import { Modal, Text, TouchableOpacity, View } from "react-native";

// import { Article } from "../../types/article";

// import { articleInfoModalStyles } from "./article-info-modal-styles";

// interface ArticleInfoModalProps {
//   showDeleteArticleModal: boolean;
//   setShowDeleteArticleModal: (showDeleteArticleModal: boolean) => void;
//   article: Article;
// }

// export function ArticleInfoModal(props: ArticleInfoModalProps) {
//   const { showDeleteArticleModal, setShowDeleteArticleModal, article } = props;

//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={showDeleteArticleModal}
//     >
//       <View style={articleInfoModalStyles.centeredView}>
//         <View style={articleInfoModalStyles.modalView}>
//           <Text>Do you want to delete this item?</Text>
//           <TouchableOpacity
//             onPress={() => setShowDeleteArticleModal(true)}
//             style={articleInfoModalStyles.deleteButton}
//           >
//             <Text style={articleInfoModalStyles.deleteText}>Delete</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => setShowDeleteArticleModal(false)}
//             style={articleInfoModalStyles.cancelButton}
//           >
//             <Text style={articleInfoModalStyles.cancelText}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// }
