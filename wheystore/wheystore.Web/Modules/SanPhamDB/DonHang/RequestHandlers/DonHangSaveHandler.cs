using MyRow = wheystore.SanPhamDB.DonHangRow;

namespace wheystore.SanPhamDB;

public interface IDonHangSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class DonHangSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IDonHangSaveHandler
{
}