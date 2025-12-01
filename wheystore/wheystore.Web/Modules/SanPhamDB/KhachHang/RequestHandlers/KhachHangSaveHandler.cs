using MyRow = wheystore.SanPhamDB.KhachHangRow;

namespace wheystore.SanPhamDB;

public interface IKhachHangSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class KhachHangSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IKhachHangSaveHandler
{
}