const BASE_URL = 'http://localhost:8000/projects';

class ProjectsService {
    static getProjects() {
        return new Promise((success, fail) => {
            fetch(BASE_URL)
                .then(response => {
                    if(response.status !== 200) {
                        fail();
                        return;
                    }

                    response.json().then(success);
                });
        });
    }
}

export default ProjectsService;