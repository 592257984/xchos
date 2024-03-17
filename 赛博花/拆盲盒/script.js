document.getElementById('openBtn').addEventListener('click', function() {
    // 宝箱图片为打开状态
    document.getElementById('openedBox').src = 'opened-box.png';
    
    // 显示图片并使其依次出现
    let images = document.querySelectorAll('.treasure-image');
    images.forEach((img, index) => {
       
    });

    // 设置一个延时，确保所有图片都已经出现后开始滑动
    setTimeout(() => {
        document.querySelector('.images').style.animation = `slide 10s linear infinite`;
    }, 2500); // 延时应该稍长于最后一张图片出现的时间

    // 在特定时间后停止动画，并只显示中间的图片
    setTimeout(() => {
        document.querySelector('.images').style.animation = 'none';
        // 除了中间的图片，其他图片渐隐消失
        images.forEach((img, index) => {
            if (index !== 2) { // 假设中间的图片是第3张，索引为2
                img.style.animation = `disappear 1s ease forwards`;
            }
        });
    }, 12000); // 根据滑动动画的时长调整
});
