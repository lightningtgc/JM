/*Deferred
 *实现Promise功能 
 *2014  by gctang
*/
J.$package(function(J){
    var $D = J.dom,
        $E = J.event,
        $T = J.type;

    //内部变量
    var state = "pending";

    //deferred.resolve 触发 done() , 状态state变为resolved
    //deferred.reject 触发 fail() , 状态state变为rejected
    //deferred.notify 触发 progress() , 状态state变为rejected
    var deferred = {
        state: function(){
            return state;
        },
        done:function(){

        },
        fail:function(){
        
        },
        progress:function(){
        
        },
        always: function() {
			//this.done( arguments ).fail( arguments );
			//return this;
		},
        then:function(){
        
        },
        promise:function(){
        
        }
    }

    //When   
    function when(subordinate){
        
    }

    J.when = when;
    J.deferred = deferred;
});
