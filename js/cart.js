        var thead_check =document.querySelector('thead input[type=checkbox]');
        var tfoot_check =document.querySelector('tfoot input[type=checkbox]');
        // console.log(tfoot_check);
        thead_check.onchange = function () {
            var status = this.checked;   
            if(thead_check.checked){
                tfoot_check.checked=true;
            }else{
                tfoot_check.checked=false;
            }
            console.log(status)

            var options = document.querySelectorAll('tbody input[type=checkbox]');
            for (var i = 0; i < options.length; i++) {
                options[i].checked = status;
            }
        }
        tfoot_check.onchange = function(){
            var status = this.checked   
            if(tfoot_check.checked){
                thead_check.checked=true;
            }else{
                thead_check.checked=false;
            }
            console.log(status)

            var options = document.querySelectorAll('tbody input[type=checkbox]');
            for (var i = 0; i < options.length; i++) {
                options[i].checked = status;
            }

        }

        document.querySelector('tbody').onchange = function (evt) {


            var allCount = document.querySelectorAll('tbody input[type=checkbox]').length;
            var checkedCount = document.querySelectorAll('tbody input[type=checkbox]:checked').length;

            thead_check.checked = (allCount === checkedCount)
            if(evt.target.checked) {
                evt.target.parentNode.parentNode.className = 'checked'
            } else {
                evt.target.parentNode.parentNode.className = ''
            }
            if(thead_check.checked){
                tfoot_check.checked=true;
            }else{
                tfoot_check.checked=false;
            }

        }
        
