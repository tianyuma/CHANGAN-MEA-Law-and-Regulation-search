// 应用程序逻辑
let currentData = {...countriesData};

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 尝试从localStorage加载数据
    const savedData = localStorage.getItem('middleEastRegulationsData');
    if (savedData) {
        try {
            currentData = JSON.parse(savedData);
            console.log('已从本地存储加载数据');
        } catch (e) {
            console.error('加载本地存储数据失败，使用默认数据', e);
        }
    }
    
    initCountryList();
    initExistingDataSelectors();
    showCountry('沙特阿拉伯');
    
    // 搜索功能
    document.getElementById('searchInput').addEventListener('input', function() {
        filterContent();
    });
    
    // 筛选功能
    document.getElementById('countryFilter').addEventListener('change', filterContent);
    document.getElementById('categoryFilter').addEventListener('change', filterContent);
});

// 初始化国家列表
function initCountryList() {
    const countryList = document.getElementById('countryList');
    const countryFilter = document.getElementById('countryFilter');
    
    // 清空现有列表
    countryList.innerHTML = '';
    countryFilter.innerHTML = '<option value="">所有国家</option>';
    
    Object.keys(currentData).forEach(country => {
        // 添加到侧边栏
        const listItem = document.createElement('li');
        listItem.className = 'country-item';
        listItem.innerHTML = `
            <div class="country-flag">${country.charAt(0)}</div>
            <span>${country}</span>
        `;
        listItem.addEventListener('click', () => {
            document.querySelectorAll('.country-item').forEach(item => {
                item.classList.remove('active');
            });
            listItem.classList.add('active');
            showCountry(country);
        });
        countryList.appendChild(listItem);
        
        // 添加到筛选器
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
}

// 其他函数保持不变（showCountry, filterContent, saveData等）
// 将原HTML中所有的JavaScript函数复制到这个文件中
// 注意：需要修改所有对countriesData的引用为currentData