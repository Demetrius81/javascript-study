"use strict";

// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой задержки — отображать новости на странице.

// Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.

// Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.

// При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное выполнение и ошибки с использованием then() и catch().

// При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.

// Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует её снова после завершения операции (будь то успешная загрузка или ошибка).

const newsData = [
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum!",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, modi! Consequatur, consequuntur ea voluptatum fuga facere quia tenetur obcaecati ut odit esse natus accusamus numquam ex ducimus! Quos est quia rem laboriosam veritatis architecto aperiam expedita cum aspernatur odit nesciunt impedit neque officia culpa accusamus accusantium ipsam atque, blanditiis exercitationem totam. Doloribus et suscipit molestias necessitatibus quo voluptatibus similique nesciunt placeat magnam aspernatur laborum architecto, reiciendis quaerat enim nam ad numquam adipisci temporibus tempore. Ipsam obcaecati totam porro, voluptatibus molestiae quia, sint voluptas veniam rerum similique inventore earum, voluptate incidunt necessitatibus facilis eveniet quasi tempora dicta ipsum tempore velit quos.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque blanditiis, quod facere expedita at laboriosam ratione sit corrupti quaerat aliquam obcaecati excepturi omnis vel dolore eius saepe quisquam, quae quia ipsa, repellendus quidem corporis? Maxime deleniti sint nostrum dicta dolorem id dolorum reprehenderit cupiditate, velit non veniam culpa qui aliquam ipsam nesciunt ut, voluptatibus asperiores architecto quia illo doloribus molestiae in excepturi ullam? Debitis aliquam veritatis atque ut optio consequatur odit, accusamus voluptas molestiae voluptatem sapiente quos vero consectetur, vel nisi eaque nesciunt sint eligendi delectus labore fuga qui repellat at exercitationem. Fugiat voluptatem dolore consequuntur repellat laborum aspernatur ea, ad aut et, dolorem amet iure, fuga repellendus temporibus! Consequuntur sapiente unde facere quae, eveniet doloribus accusantium dolore, sequi quasi cumque labore repellendus dignissimos? Repudiandae maxime esse necessitatibus commodi odit nemo repellat porro iusto, corrupti eum sed similique labore? Consequuntur assumenda deserunt dolor quae hic at eaque facere provident laborum modi esse pariatur doloremque autem aperiam quas sunt unde fuga alias, vel tenetur neque obcaecati consectetur enim soluta. Optio aliquam maxime cum nostrum eos incidunt ad consectetur corporis temporibus, repellendus libero! Repudiandae nulla, nihil illum id quis iure nisi fugit a tempore delectus quos tempora. Blanditiis dolor possimus temporibus!",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda adipisci sit tempore beatae qui et illum voluptates laudantium fugiat atque porro sunt explicabo eligendi dolorem eius ab aut ipsam ducimus quibusdam ipsum, amet pariatur. Deleniti, culpa. Accusamus quo sunt minima doloremque sint quisquam aliquid odit quasi tempora commodi recusandae culpa aperiam vel rerum reiciendis veniam similique, unde officiis ab quos, id autem fugit cum magnam? Error molestiae vel non repellat porro? Nisi dolores atque, est sed id voluptatibus culpa nostrum cum enim quos officia soluta nulla recusandae voluptatem commodi consequatur quas maiores fuga, tempora dolorum. Quia quis voluptate ipsa inventore aut iusto! Quos velit nulla laborum deserunt labore! Libero laborum, vitae quisquam aperiam, nemo tempore modi error deserunt labore quaerat voluptas. Nulla magni ullam iusto? Cumque nobis nam distinctio facilis. Soluta perspiciatis aut magnam natus fuga. Laborum distinctio aut beatae, totam eius dolor minus aliquid sed voluptatem similique voluptas reiciendis!",
    },
];

const rewiews = [];

function addElement(baseEl) {
    const boxEl = document.createElement("div");
    boxEl.classList.add("app_box");

    const btnEl = document.createElement("button");
    btnEl.classList.add("app_box__btn");
    btnEl.textContent = "Load News";

    const divEl = document.createElement("div");
    divEl.classList.add("app_box_content-box");

    boxEl.append(btnEl);
    boxEl.append(divEl);

    baseEl.append(boxEl);

    btnEl.addEventListener("click", () => {
        printMessage(divEl, "Getting news...", "message");
        btnEl.disabled = true;
        fetchNews()
            .then((data) => {
                printNews(divEl, data);
            })
            .catch((err) => {
                printMessage(divEl, err, "error");
            })
            .finally(() => {
                btnEl.disabled = false;
            });
    });
}

const fetchNews = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10);
            if (randomNumber) {
                resolve(newsData);
            } else {
                reject("Error 524. A Timeout Occurred.");
            }
        }, 2000);
    });
};

const printNews = (el, news) => {
    el.innerHTML = "";
    news.forEach((x) => {
        const pEl = document.createElement("p");
        pEl.classList.add("app_box__text");
        pEl.textContent = x.title;

        const contentEl = document.createElement("div");
        contentEl.classList.add("app_box_content-box__content");
        contentEl.textContent = x.content;

        el.append(pEl);
        el.append(contentEl);
    });
};

const printMessage = (el, message, className) => {
    el.innerHTML = "";
    const errEl = document.createElement("div");
    errEl.classList.add(`app_box_content-box__${className}`);
    errEl.textContent = message;
    el.prepend(errEl);
};

const appEl = document.querySelector(".app");
addElement(appEl);
