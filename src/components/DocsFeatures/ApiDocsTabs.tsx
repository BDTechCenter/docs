import React, { useState, useEffect } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { ApiReferenceReact } from "@scalar/api-reference-react";

function ApiDocsTabs() {
	const [configsData, setConfigsData] = useState([]);

	useEffect(() => {
		const fetchConfigs = async () => {
			const configs = [
				{
					spec: { url: "http://10.234.84.58:8766/tech-news/v3/api-docs" },
					label: "Tech News",
				},
				{
					spec: { url: "http://10.234.84.58:8766/tech-news/v3/api-docs" },
					label: "Another Spec",
				},
				// Add more config as needed
			];
			const fetchedData = await Promise.all(
				configs.map(async (config) => {
					const response = await fetch(config.spec.url);
					const data = await response.json();
					return { ...config, data }; // Combine URL, label, and fetched data
				})
			);
			setConfigsData(fetchedData);
		};
		fetchConfigs();
	}, []);

	return configsData.length > 0 ? (
		<Tabs defaultValue="Tech News">
			{configsData.map((config) => (
				<TabItem key={config.label} value={config.label} label={config.label}>
					<ApiReferenceReact configuration={config} />
				</TabItem>
			))}
		</Tabs>
	) : (
		<div>Loading API documentation...</div>
	);
}

export default ApiDocsTabs;
