import axios from "axios";

const CONFIG = { withCredentials: true }

export const getAuthStatus = () => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/auth/status`, CONFIG)
export const getGuilds = () => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/guilds`, CONFIG)
export const getGuild = (guildId: string) => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/guilds/${guildId}`, CONFIG)
export const getInsightsDashboardData = (guildId: string) => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/insights/${guildId}/dashboard`, CONFIG)
export const getInsightsMembers = (guildId: string) => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/insights/${guildId}/members`, CONFIG)
export const getInsightsActions = (guildId: string) => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/insights/${guildId}/logs`, CONFIG)
export const getModuleData = (guildId: string, module: string) => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/manage/${guildId}/${module}`, CONFIG)
export const postModuleData = (guildId: string, module: string, data: any) => axios.post(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/manage/${guildId}/${module}`, { data }, CONFIG)
export const getGuildChannels = (guildId: string) => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/guilds/${guildId}/channels`, CONFIG)
export const getGuildCategories = (guildId: string) => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/guilds/${guildId}/categories`, CONFIG)
export const getGuildRoles = (guildId: string) => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/guilds/${guildId}/roles`, CONFIG)
export const getGuildMembers = (guildId: string) => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/guilds/${guildId}/members`, CONFIG)
export const getBotStats = () => axios.get(`${process.env.ENV === 'production' ? "https://bot-api.lambdadev.xyz" : "http://localhost:3001"}/api/bot/stats`, CONFIG)