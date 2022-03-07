function createTeamProfile(data) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Best Team Ever</title>
</head>
<body>
    <header>
        <div class="container flex-row justify-content-between py-2"></div>
        <h1 class="page-title text-white bg-primary py-2 px-3" style="text-align: center">Best Team Ever</h1>
    </header>
    <main>
        <div class="row" id="employees"></div>
        $(data)
    </main>
</body>
</html>
`;
}
module.exports = createTeamProfile;