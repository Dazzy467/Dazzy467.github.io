const githubLink = "https://github.com/Dazzy467/";
const instagramLink = "https://www.instagram.com/davidyusufwaskito_/";
const whatsappLink = "https://wa.me/+6285821535674";
function updateLink()
{
    document.querySelectorAll(".github-link").forEach((link) => {
        link.href = githubLink;
    });

    document.querySelectorAll(".instagram-link").forEach((link) => {
        link.href = instagramLink;
    });

    document.querySelectorAll(".whatsapp-link").forEach((link) => {
        link.href = whatsappLink;
    });
}

updateLink();