import { END, START, StateGraph } from "@langchain/langgraph";
import { ResearcherGraphAnnotation } from "./researcher-state.js";

/**
 * Given either a topic, or array of links, preform research and generate a report.
 *
 * Inputs:
 * - Research report request
 * - Array of links (optional)
 *
 * If given an array of link:
 * Use the existing `verify-links` subgraph to get page contents for each link. Then,
 * generate a report on each page content. Finally, combine all reports into a single parent report.
 * Once the parent report is generated, use a reflection style prompt to ensure the report is relevant to the topic.
 * If not, search for new context.
 *
 * If not given an array of links:
 * - Search for links about the topic:
 *   - Exa API/Tavily API
 *   - Arcade `SearchRecentTweetsByKeywords`
 *   - Smol AI: https://buttondown.com/ainews
 *
 *
 * Example:
 * - user collects links to tweets, blogs, and reddit posts about OpenAI's new product.
 * - report agent generates reports on each of these links.
 * - using all of the reports, the user can combine them into a single report to then generate a post or posts about OpenAI's new product.
 */

const researcherWorkflow = new StateGraph(ResearcherGraphAnnotation)
  .addNode("generateSearchPlan", () => {
    throw new Error("Not implemented");
  })
  .addNode("collectLinks", () => {
    throw new Error("Not implemented");
  })
  .addNode("generateReport", () => {
    throw new Error("Not implemented");
  })
  .addNode("combineReports", () => {
    throw new Error("Not implemented");
  })
  .addNode("generatePost", () => {
    throw new Error("Not implemented");
  })
  .addEdge(START, "generateSearchPlan")
  .addEdge("generateSearchPlan", "collectLinks")
  .addEdge("collectLinks", "generateReport")
  .addEdge("generateReport", "combineReports")
  .addEdge("combineReports", "generatePost")
  .addEdge("generatePost", END);

export const researcherGraph = researcherWorkflow.compile();
researcherGraph.name = "Researcher Graph";
