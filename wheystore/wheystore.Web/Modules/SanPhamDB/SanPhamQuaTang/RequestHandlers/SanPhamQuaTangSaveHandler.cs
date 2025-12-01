using MyRow = wheystore.SanPhamDB.SanPhamQuaTangRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamQuaTangSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class SanPhamQuaTangSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ISanPhamQuaTangSaveHandler
{
}