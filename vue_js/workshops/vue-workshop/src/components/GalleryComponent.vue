<template>
    <div class="gallery center">
        <div class="gallery_img">
            <img :src="currentPicture.path" :alt="currentPicture.altName">
        </div>
        <div class="gallery__pict-box">
            <div v-bind="{current: currentPicture.id === picture.id}" class="gallery__pict-box_picture" v-for="picture in pictures" :key="picture.id">
                <img @clicl="showPicture(picture)" :src="picture.path" :alt="picture.altName">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GalleryComponent',

    data() {
        return {
            pictures:[
                {
                    id: 1,
                    path: 'https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg',
                    altName: 'Picture 1',
                },
                {
                    id: 2,
                    path: 'https://kartinkof.club/uploads/posts/2022-12/1670401837_kartinkof-club-p-kartinki-neobichnie-so-smislom-14.jpg',
                    altName: 'Picture 2',
                },
                {
                    id: 3,
                    path: 'https://kartinkof.club/uploads/posts/2022-12/1670401840_kartinkof-club-p-kartinki-neobichnie-so-smislom-19.jpg',
                    altName: 'Picture 3',
                },
                {
                    id: 4,
                    path: 'https://kartinkof.club/uploads/posts/2022-12/1670401842_kartinkof-club-p-kartinki-neobichnie-so-smislom-22.jpg',
                    altName: 'Picture 4',
                },
                {
                    id: 5,
                    path: 'https://kartinkof.club/uploads/posts/2022-12/1670401856_kartinkof-club-p-kartinki-neobichnie-so-smislom-37.jpg',
                    altName: 'Picture 5',
                },
                {
                    id: 6,
                    path: 'https://kartinkof.club/uploads/posts/2022-12/1670401857_kartinkof-club-p-kartinki-neobichnie-so-smislom-39.jpg',
                    altName: 'Picture 6',
                },
                {
                    id: 7,
                    path: 'https://kartinkof.club/uploads/posts/2022-12/1670401862_kartinkof-club-p-kartinki-neobichnie-so-smislom-44.jpg',
                    altName: 'Picture 7',
                },
                {
                    id: 8,
                    path: 'https://kartinkof.club/uploads/posts/2022-12/1670401886_kartinkof-club-p-kartinki-neobichnie-so-smislom-68.jpg',
                    altName: 'Picture 8',
                },
                {
                    id: 9,
                    path: 'https://amiel.club/uploads/posts/2022-03/1647722251_1-amiel-club-p-krasivie-i-neobichnie-kartinki-1.jpg',
                    altName: 'Picture 9',
                },
                {
                    id: 10,
                    path: 'https://amiel.club/uploads/posts/2022-03/1647722283_2-amiel-club-p-krasivie-i-neobichnie-kartinki-2.jpg',
                    altName: 'Picture 10',
                },
            ],
            currentPicture: {
                id: 0,
                path: 'https://amiel.club/uploads/posts/2022-03/thumbs/1647722256_7-amiel-club-p-krasivie-i-neobichnie-kartinki-7.jpg',
                altName: 'Default',
            },

        };
    },

    mounted() {
        
    },

    methods: {
        showPicture(img) {
            this.currentPicture = img;
            console.log(this.currentPicture);
        },
        
    },
    
};
</script>

<style lang="scss" scoped>

$widthPage: 1600px;
$colorBacgroundSmallCardImg: #eaeaea;
$colorBacgroundBigCardImg: #c4c4c4;

.center {
    padding-left: calc(50% - ($widthPage / 2));
    padding-right: calc(50% - ($widthPage / 2));
}

.gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 32px;
    margin-top: 64px;
    margin-bottom: 64px;

    &_img {
        background-size: cover;
        
        & img {
            object-fit: cover;
            
        }
    }

    &__pict-box {
        display: grid;
        grid-template-columns: repeat(10, 160px);
        justify-content: center;
        align-items: center;

        &_picture {
            width: 120px;
            height: 120px;
            background-repeat: no-repeat;
            background-size: contain;
            overflow: hidden;
            border-radius: 20px;
        }
    }
}

.current {
    border: 2px red;
}

</style>