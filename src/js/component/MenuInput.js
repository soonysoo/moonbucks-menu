import component from '../core/component.js';
import {$} from '../utils.js'

export default class MenuInput extends component {
  setup() {
    this.$state = this.$props;
  }
  template() {
    return `
        <div class="d-flex w-100">
        <label for="espresso-menu-name" class="input-label" hidden>
          메뉴 이름
        </label>
        <input
                type="text"
                id="espresso-menu-name"
                name="espressoMenuName"
                class="input-field"
                placeholder="메뉴 이름"
                autocomplete="off"
                value=""
        />
        <button
                type="button"
                name="submit"
                id="espresso-menu-submit-button"
                class="input-submit bg-green-600 ml-2"
        >
          확인
        </button>
      </div>
        `;
  }
  mounted(){
    const isEmptyValue = (value) => {
      if(!value){
        alert("빈 값을 입력하셨습니다"); 
        return true;
      }
      return false; 
    }
    $("#espresso-menu-form").addEventListener('submit', (e)=>{
      e.preventDefault();
    })
    $('#espresso-menu-submit-button').addEventListener('click',(e)=>{
      const name = $('#espresso-menu-name').value;
      if(isEmptyValue(name)) return;
      this.$state.onAddMenu(name);
    })

    $('#espresso-menu-name').addEventListener('keyup',(e)=>{
      if(e.key ==='Enter'){
        const name = e.target.value;
        if(isEmptyValue(name)) return;
        this.$state.onAddMenu(name);
      }
    })
  }
}
