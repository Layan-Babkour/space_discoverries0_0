function redirectToPage() {
    var selectElement = document.getElementById("pageSelect");
    var selectedValue = selectElement.value; // الحصول على الرابط المختار
    
    if (selectedValue) {
        window.location.href = selectedValue; // إعادة التوجيه إلى الصفحة المختارة
}
}

