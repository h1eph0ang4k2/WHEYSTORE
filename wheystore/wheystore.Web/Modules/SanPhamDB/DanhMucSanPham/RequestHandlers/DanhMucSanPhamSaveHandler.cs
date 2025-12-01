using MyRow = wheystore.SanPhamDB.DanhMucSanPhamRow;

namespace wheystore.SanPhamDB;

public interface IDanhMucSanPhamSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class DanhMucSanPhamSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IDanhMucSanPhamSaveHandler
{
}