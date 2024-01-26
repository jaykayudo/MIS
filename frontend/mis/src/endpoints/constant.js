const host  = "http://127.0.0.1:8000"

export const endpoints = {
    login: host+"/rest-auth/login/",
    changePassword: host+"/rest-auth/password/change/",
    logout: host+"/rest-auth/logout/",
    // logout: host+"/rest-auth/logout/",
    projects: host+"/projects/",
    projectsAdd: host+"/projects/",
    projectsDetails: (id)=>host+`/projects/${id}`,
    plans: host+"/plans/",
    plansAdd: host+"/plans/",
    plansDetails: (id)=>host+`/plans/${id}`,
    states: host+`/states/`,
    indicator: host+`/indicator/`,

}