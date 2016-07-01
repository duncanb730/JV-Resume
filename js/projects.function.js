projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	}
}