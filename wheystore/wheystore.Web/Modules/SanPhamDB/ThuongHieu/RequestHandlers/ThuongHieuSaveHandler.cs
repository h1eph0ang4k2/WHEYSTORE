using MyRow = wheystore.SanPhamDB.ThuongHieuRow;

namespace wheystore.SanPhamDB;

public interface IThuongHieuSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class ThuongHieuSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IThuongHieuSaveHandler
{
}