$(document).ready(function(){function e(){s(!1)}function a(e){e?$(".menuDom").addClass("on"):$(".menuDom").removeClass("on")}function o(){(p.prepage||2==p.nowpage)&&(p.wrp.find(".wrapperin").addClass("off"),p.wrapperTimeout&&clearTimeout(p.wrapperTimeout),p.wrapperTimeout=setTimeout(function(){p.wrp.find(".wrapperin").removeClass("off")},500)),p.wrp.attr("class","wrapper").addClass("page"+p.nowpage),2==p.nowpage?p.prepage=!0:p.prepage=!1}function n(){var e=$.address.value();switch(console.log(e),e){case"/":window.location.href="index.html#/page1";break;case"/page1":console.log("牙齦緊急檢查"),p.nowpage=1;break;case"/page2":console.log("牙齦求診須知"),p.nowpage=2;break;case"/page3":console.log("立即索取"),p.nowpage=3;break;case"/page4":console.log("救救牙齦TVC"),p.nowpage=4}o()}function s(e){console.log("zz"),e?$(".loading").fadeIn():$(".loading").fadeOut()}var p={};p.wrp=$(".wrapper"),$.address.change(n),$(".menubtn").click(function(){$(this).hasClass("on")?($(this).removeClass("on"),a(!1)):($(this).addClass("on"),a(!0))}),$(window).load(e)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvd0xvYWQiLCJzaG93TG9hZGluZyIsInNob3dtZW51IiwiX3QiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY2hhbmdlUGFnZSIsIndlYkRhdGEiLCJwcmVwYWdlIiwibm93cGFnZSIsIndycCIsImZpbmQiLCJ3cmFwcGVyVGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhdHRyIiwiYWRkckNoYW5nZSIsInZhbHVlIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJmYWRlSW4iLCJmYWRlT3V0IiwiY2hhbmdlIiwiY2xpY2siLCJ0aGlzIiwiaGFzQ2xhc3MiLCJsb2FkIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQWVqQixRQUFTQyxLQUNSQyxHQUFZLEdBTVYsUUFBU0MsR0FBU0MsR0FDZEEsRUFDRk4sRUFBRSxZQUFZTyxTQUFTLE1BRXZCUCxFQUFFLFlBQVlRLFlBQVksTUFHNUIsUUFBU0MsTUFDTEMsRUFBUUMsU0FBNEIsR0FBakJELEVBQVFFLFdBQzdCRixFQUFRRyxJQUFJQyxLQUFLLGNBQWNQLFNBQVMsT0FDckNHLEVBQVFLLGdCQUFnQkMsYUFBYU4sRUFBUUssZ0JBQ2hETCxFQUFRSyxlQUFpQkUsV0FBVyxXQUFXUCxFQUFRRyxJQUFJQyxLQUFLLGNBQWNOLFlBQVksUUFBUyxNQUVwR0UsRUFBUUcsSUFBSUssS0FBSyxRQUFRLFdBQVdYLFNBQVMsT0FBU0csRUFBUUUsU0FFeEMsR0FBbkJGLEVBQVFFLFFBQWNGLEVBQVFDLFNBQVUsRUFDdENELEVBQVFDLFNBQVUsRUFFeEIsUUFBU1EsS0FDUixHQUFJQyxHQUFRcEIsRUFBRXFCLFFBQVFELE9BRXpCLFFBREdFLFFBQVFDLElBQUlILEdBQ1JBLEdBQ04sSUFBSyxJQUNKSSxPQUFPQyxTQUFTQyxLQUFPLG1CQUN4QixNQUNBLEtBQUssU0FDSkosUUFBUUMsSUFBSSxVQUNaYixFQUFRRSxRQUFVLENBQ25CLE1BQ0EsS0FBSyxTQUNKVSxRQUFRQyxJQUFJLFVBQ1piLEVBQVFFLFFBQVUsQ0FDbkIsTUFDQSxLQUFLLFNBQ0pVLFFBQVFDLElBQUksUUFDWmIsRUFBUUUsUUFBVSxDQUNuQixNQUNTLEtBQUssU0FDRFUsUUFBUUMsSUFBSSxXQUNaYixFQUFRRSxRQUFVLEVBR2hDSCxJQUVDLFFBQVNMLEdBQVlFLEdBQ3BCZ0IsUUFBUUMsSUFBSSxNQUNUakIsRUFBSU4sRUFBRSxZQUFZMkIsU0FDaEIzQixFQUFFLFlBQVk0QixVQXBFdEIsR0FBSWxCLEtBQ0pBLEdBQVFHLElBQUliLEVBQUUsWUFNZEEsRUFBRXFCLFFBQVFRLE9BQU9WLEdBRWpCbkIsRUFBRSxZQUFZOEIsTUFBTSxXQUNoQjlCLEVBQUUrQixNQUFNQyxTQUFTLE9BQU9oQyxFQUFFK0IsTUFBTXZCLFlBQVksTUFBTUgsR0FBUyxLQUN4REwsRUFBRStCLE1BQU14QixTQUFTLE1BQU9GLEdBQVMsTUFFeENMLEVBQUV3QixRQUFRUyxLQUFLOUIiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHR2YXIgd2ViRGF0YSA9e307XHJcblx0d2ViRGF0YS53cnA9JCgnLndyYXBwZXInKTtcclxuXHJcblx0Ly9Jbml0XHJcblxyXG5cclxuXHQvL0FkZExpc3RlbmVyXHJcblx0JC5hZGRyZXNzLmNoYW5nZShhZGRyQ2hhbmdlKTtcclxuXHRcdC8vJC5hZGRyZXNzLnZhbHVlKFwiL3BhZ2U0XCIpO1xyXG5cdCQoJy5tZW51YnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdGlmKCQodGhpcykuaGFzQ2xhc3MoJ29uJykpeyQodGhpcykucmVtb3ZlQ2xhc3MoJ29uJyk7c2hvd21lbnUoZmFsc2UpO31cclxuXHRcdGVsc2UgeyQodGhpcykuYWRkQ2xhc3MoJ29uJyk7IHNob3dtZW51KHRydWUpO31cclxuXHR9KTtcclxuXHQkKHdpbmRvdykubG9hZCh3aW5kb3dMb2FkKTtcclxuXHRmdW5jdGlvbiB3aW5kb3dMb2FkKCl7XHJcblx0XHRzaG93TG9hZGluZyhmYWxzZSk7XHJcblx0fVxyXG4gICAgXHJcblxyXG5cclxuICAgIC8vRWV2ZW50XHJcbiAgICBmdW5jdGlvbiBzaG93bWVudShfdCl7XHJcbiAgICBcdGlmKF90KXtcclxuICAgIFx0XHQkKCcubWVudURvbScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgXHR9ZWxzZXtcclxuICAgIFx0XHQkKCcubWVudURvbScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgXHR9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VQYWdlKCl7XHJcbiAgICBcdGlmKHdlYkRhdGEucHJlcGFnZSB8fCB3ZWJEYXRhLm5vd3BhZ2U9PTIpe1xyXG4gICAgXHRcdHdlYkRhdGEud3JwLmZpbmQoJy53cmFwcGVyaW4nKS5hZGRDbGFzcygnb2ZmJyk7ICAgIFx0XHRcclxuICAgIFx0XHRpZih3ZWJEYXRhLndyYXBwZXJUaW1lb3V0KSBjbGVhclRpbWVvdXQod2ViRGF0YS53cmFwcGVyVGltZW91dCk7XHJcbiAgICBcdFx0d2ViRGF0YS53cmFwcGVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXt3ZWJEYXRhLndycC5maW5kKCcud3JhcHBlcmluJykucmVtb3ZlQ2xhc3MoJ29mZicpO30sNTAwKTtcclxuICAgIFx0fVxyXG4gICAgXHR3ZWJEYXRhLndycC5hdHRyKCdjbGFzcycsJ3dyYXBwZXInKS5hZGRDbGFzcygncGFnZScgKyB3ZWJEYXRhLm5vd3BhZ2UpO1xyXG4gICAgXHRcclxuICAgIFx0aWYod2ViRGF0YS5ub3dwYWdlID09IDIpIHdlYkRhdGEucHJlcGFnZSA9IHRydWU7XHJcbiAgICBcdGVsc2Ugd2ViRGF0YS5wcmVwYWdlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRyQ2hhbmdlKCl7XHJcbiAgICBcdHZhciB2YWx1ZSA9ICQuYWRkcmVzcy52YWx1ZSgpO1xyXG4gICAgXHRjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHRzd2l0Y2godmFsdWUpIHtcclxuXHRcdFx0Y2FzZSAnLyc6XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImluZGV4Lmh0bWwjL3BhZ2UxXCI7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICcvcGFnZTEnOlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfniZnpvabnt4rmgKXmqqLmn6UnKTtcclxuXHRcdFx0XHR3ZWJEYXRhLm5vd3BhZ2UgPSAxO1x0XHRcdFx0XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICcvcGFnZTInOlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfniZnpvabmsYLoqLrpoIjnn6UnKTtcclxuXHRcdFx0XHR3ZWJEYXRhLm5vd3BhZ2UgPSAyO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnL3BhZ2UzJzpcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn56uL5Y2z57Si5Y+WJyk7XHJcblx0XHRcdFx0d2ViRGF0YS5ub3dwYWdlID0gMztcclxuXHRcdFx0YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlNCc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pWR5pWR54mZ6b2mVFZDJyk7XHJcbiAgICAgICAgICAgICAgICB3ZWJEYXRhLm5vd3BhZ2UgPSA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHRcdH1cclxuXHRcdGNoYW5nZVBhZ2UoKTtcclxuICAgIH1cclxuICBcdGZ1bmN0aW9uIHNob3dMb2FkaW5nKF90KXtcclxuICBcdFx0Y29uc29sZS5sb2coJ3p6Jyk7XHJcbiAgXHRcdGlmKF90KSAkKCcubG9hZGluZycpLmZhZGVJbigpO1xyXG4gIFx0XHRlbHNlICQoJy5sb2FkaW5nJykuZmFkZU91dCgpO1xyXG4gIFx0fVxyXG59KS8vcmVhZHkgZW5kICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9