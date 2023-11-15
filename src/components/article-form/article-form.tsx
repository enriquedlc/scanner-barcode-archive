import { useEffect, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { ArticleFormNumberInput } from "./article-form-input/article-form-number-input";
import { ArticleFormTextInput } from "./article-form-input/article-form-text-input";

import { INITIAL_ARTICLE_FORM_STATE } from "../../constants/states/initial-states";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useShowToast } from "../../hooks/useShowToast";
import { createArticle, updateArticle } from "../../services/article";
import { useArticlesStore } from "../../store/articles";
import { User, useUserAuthStore } from "../../store/user-auth";
import { Article } from "../../types/article";
import { ScannedData } from "../../types/types";

import { useCategoriesStore } from "../../store/categories";
import { articleInfoModalStyles } from "../article-info-modal/article-info-modal-styles";
import { CategoryDropdown } from "../category-dropdown/category-dropdown";
import { articleFormStyles } from "./article-form-styles";

interface ArticleFormProps {
	visible: boolean;
	setShowArticleForm: (showArticleForm: boolean) => void;
	scannedBarcode: ScannedData["data"];
	setScannedBarcode: (scannedBarcode: ScannedData["data"]) => void;
	articleButtonActionText: string;
	articleFormTitle: string;
	article?: Article;
}

export function ArticleForm(props: ArticleFormProps) {
	const {
		visible,
		scannedBarcode,
		setScannedBarcode,
		setShowArticleForm,
		articleButtonActionText,
		articleFormTitle,
		article: currentArticle,
	} = props;

	const { getCategories } = useCategoriesStore((state) => state);
	const articles = useArticlesStore((state) => state.articles);

	const [scannedArticle, setScannedArticle] = useState<Article>(
		currentArticle || INITIAL_ARTICLE_FORM_STATE,
	);

	const { showToast } = useShowToast();
	const { navigation } = useAppNavigation();
	const user = useUserAuthStore((state) => state.user);
	const fetchArticles = useArticlesStore((state) => state.fetchArticles);

	function handleChangeText<T>(text: T, input: keyof Article) {
		setScannedArticle({ ...scannedArticle, [input]: text });
	}

	const handleArticleAction = async (
		article: Article,
		userId: User["id"],
		scannedBarcode: ScannedData["data"],
	) => {
		if (currentArticle || findedArticle) {
			const response = await updateArticle(article, article.id);

			if (response?.updated) {
				showToast("success", "Article updated", "Article updated succesfully!📦");
				setShowArticleForm(false);
				fetchArticles(userId);
				navigation.navigate("HOME_SCREEN");
				setScannedBarcode("");
				return;
			}
			return;
		}
		const response = await createArticle(article, userId, scannedBarcode);

		if (response?.created) {
			showToast("success", "Artículo creado", "Artículo creado con éxito!📦");
			setShowArticleForm(false);
			fetchArticles(userId);
			navigation.navigate("HOME_SCREEN");
			setScannedBarcode("");
			return;
		}
		showToast("error", "Error al crear artículo", "");
	};

	const handleAction = () => {
		setShowArticleForm(false);
		setScannedBarcode("");
	};

	const findedArticle = articles.find((article) => article.barcode === scannedBarcode);

	useEffect(() => {
		if (findedArticle) {
			setScannedArticle(findedArticle);
		}
	}, [findedArticle]);

	return (
		<Modal animationType="fade" visible={visible}>
			<View style={articleFormStyles.centeredView}>
				<View style={articleFormStyles.modalView}>
					<Text style={articleFormStyles.title}>{articleFormTitle}</Text>
					<Text style={articleFormStyles.title}>{scannedBarcode}</Text>
					<View
						style={{
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<ArticleFormTextInput
							setValue={(text) => handleChangeText(text, "articleName")}
							placeholder={"Nombre"}
							value={scannedArticle.articleName}
						/>
						<CategoryDropdown
							defaultCategory={scannedArticle.categoryName}
							options={getCategories().map((category) => ({
								label: category.categoryName,
								value: category.categoryName,
								icon: category.icon,
							}))}
							onSelect={(value) => handleChangeText(value, "categoryName")}
						/>
						<ScrollView>
							<View
								style={{
									maxWidth: "100%",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<ArticleFormNumberInput
									label="Estantería"
									placeholder="0"
									setValue={(text) => handleChangeText(Number(text), "shelf")}
									value={String(scannedArticle.shelf)}
								/>
								<ArticleFormNumberInput
									label="Almacén"
									placeholder="0"
									setValue={(text) => handleChangeText(Number(text), "warehouse")}
									value={String(scannedArticle.warehouse)}
								/>
								<ArticleFormNumberInput
									label="Exhibición"
									placeholder="0"
									setValue={(text) =>
										handleChangeText(Number(text), "exhibition")
									}
									value={String(scannedArticle.exhibition)}
								/>
							</View>
						</ScrollView>
						<View style={articleInfoModalStyles.buttonsContainer}>
							<TouchableOpacity
								onPress={() => {
									if (user)
										handleArticleAction(
											scannedArticle,
											user.id,
											scannedBarcode,
										);
								}}
								style={articleInfoModalStyles.editButton}
							>
								<Text style={articleInfoModalStyles.deleteText}>
									{findedArticle ? "Editar" : articleButtonActionText}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={handleAction}
								style={articleInfoModalStyles.deleteButton}
							>
								<Text style={articleInfoModalStyles.cancelText}>Volver</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
}
