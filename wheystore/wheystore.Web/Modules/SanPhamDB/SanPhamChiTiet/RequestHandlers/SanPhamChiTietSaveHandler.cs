using MyRow = wheystore.SanPhamDB.SanPhamChiTietRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamChiTietSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class SanPhamChiTietSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ISanPhamChiTietSaveHandler
{
}