<template>
    <div>
        <div class="calc">
            <input class="calc__input" @keyup="anyKeyup($event)" type="text" v-model="result">
            <div class="calc__numbers">
                <button class="calc__numbers_number" @click="addButton(num)" v-for="num in nums" :key="num.id">{{ num }}</button>
                <button class="calc__numbers_result" @click="calcResult">=</button>
            </div>
            <div class="calc__tabs">
                <button @click="addButton(tab)" v-for="tab in tabs" :key="tab.id">{{ tab }}</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CalcComponent',

    data() {
        return {
            result: '0',
            nums: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
            tabs: ['-', '+', '*', '/',],
            resultKey: 'Enter',
        };
    },

    mounted() {
        
    },

    methods: {
        addButton(char) {
            this.result = (this.result === '0' ? '' : this.result) + char;
        },
        calcResult() {
            this.result = eval(this.result);
        },
        anyKeyup(event) {
            let keyStr = event.key;
            if (this.nums.includes(keyStr) || this.tabs.includes(keyStr)) {
                this.addButton(keyStr);
            } else if (keyStr === this.resultKey) {
                this.calcResult();
            }
            console.log(this.nums.includes(keyStr));
        }
    },
};
</script>

<style lang="scss" scoped>
.calc {
    display: grid;
    grid-template-columns: 150px 50px;
    justify-content: center;
    padding-top: 48px;
    padding-bottom: 48px;
    gap: 5px;
    
    &__input {
        grid-column: 1 / -1;
        text-align: right;
    }

    &__numbers {
        display: grid;
        grid-template-columns: repeat(3, 50px);
        justify-content: center;

        &_result {
            grid-column: 2 / -1;
        }
    }
    &__tabs {
        display: grid;
        grid-template-columns: 50px;
        justify-content: center;
    }
}

</style>